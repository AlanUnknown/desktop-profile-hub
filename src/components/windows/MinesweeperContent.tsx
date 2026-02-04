import React, { useState, useCallback, useEffect } from 'react';
import { Bomb, Flag } from 'lucide-react';

type CellState = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborMines: number;
};

const GRID_SIZE = 9;
const MINE_COUNT = 10;

const MinesweeperContent: React.FC = () => {
  const [grid, setGrid] = useState<CellState[][]>([]);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [flagsLeft, setFlagsLeft] = useState(MINE_COUNT);
  const [time, setTime] = useState(0);
  const [isFirstClick, setIsFirstClick] = useState(true);

  const initializeGrid = useCallback((excludeRow?: number, excludeCol?: number) => {
    // Create empty grid
    const newGrid: CellState[][] = Array(GRID_SIZE).fill(null).map(() =>
      Array(GRID_SIZE).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0,
      }))
    );

    // Place mines randomly (avoiding first click position)
    let minesPlaced = 0;
    while (minesPlaced < MINE_COUNT) {
      const row = Math.floor(Math.random() * GRID_SIZE);
      const col = Math.floor(Math.random() * GRID_SIZE);
      
      // Skip if already a mine or if it's the excluded cell
      if (newGrid[row][col].isMine) continue;
      if (excludeRow !== undefined && excludeCol !== undefined) {
        if (Math.abs(row - excludeRow) <= 1 && Math.abs(col - excludeCol) <= 1) continue;
      }
      
      newGrid[row][col].isMine = true;
      minesPlaced++;
    }

    // Calculate neighbor mines
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (newGrid[row][col].isMine) continue;
        
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = row + dr;
            const nc = col + dc;
            if (nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE) {
              if (newGrid[nr][nc].isMine) count++;
            }
          }
        }
        newGrid[row][col].neighborMines = count;
      }
    }

    return newGrid;
  }, []);

  const resetGame = useCallback(() => {
    setGrid(initializeGrid());
    setGameState('playing');
    setFlagsLeft(MINE_COUNT);
    setTime(0);
    setIsFirstClick(true);
  }, [initializeGrid]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  useEffect(() => {
    if (gameState !== 'playing' || isFirstClick) return;
    
    const timer = setInterval(() => {
      setTime(t => Math.min(t + 1, 999));
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, isFirstClick]);

  const revealCell = useCallback((row: number, col: number, currentGrid: CellState[][]) => {
    if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) return;
    if (currentGrid[row][col].isRevealed || currentGrid[row][col].isFlagged) return;

    currentGrid[row][col].isRevealed = true;

    if (currentGrid[row][col].neighborMines === 0 && !currentGrid[row][col].isMine) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          revealCell(row + dr, col + dc, currentGrid);
        }
      }
    }
  }, []);

  const handleCellClick = useCallback((row: number, col: number) => {
    if (gameState !== 'playing') return;
    if (grid[row][col].isFlagged || grid[row][col].isRevealed) return;

    let currentGrid = grid;
    
    // First click - regenerate grid to ensure safe start
    if (isFirstClick) {
      currentGrid = initializeGrid(row, col);
      setIsFirstClick(false);
    }

    const newGrid = currentGrid.map(r => r.map(c => ({ ...c })));

    if (newGrid[row][col].isMine) {
      // Game over - reveal all mines
      newGrid.forEach(r => r.forEach(c => {
        if (c.isMine) c.isRevealed = true;
      }));
      setGrid(newGrid);
      setGameState('lost');
      return;
    }

    revealCell(row, col, newGrid);
    setGrid(newGrid);

    // Check win condition
    const unrevealed = newGrid.flat().filter(c => !c.isRevealed && !c.isMine);
    if (unrevealed.length === 0) {
      setGameState('won');
    }
  }, [grid, gameState, isFirstClick, initializeGrid, revealCell]);

  const handleRightClick = useCallback((e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault();
    if (gameState !== 'playing') return;
    if (grid[row][col].isRevealed) return;

    const newGrid = grid.map(r => r.map(c => ({ ...c })));
    const cell = newGrid[row][col];
    
    if (cell.isFlagged) {
      cell.isFlagged = false;
      setFlagsLeft(f => f + 1);
    } else if (flagsLeft > 0) {
      cell.isFlagged = true;
      setFlagsLeft(f => f - 1);
    }

    setGrid(newGrid);
  }, [grid, gameState, flagsLeft]);

  const getNumberColor = (num: number) => {
    const colors = ['', 'text-blue-600', 'text-green-600', 'text-red-600', 'text-purple-800', 'text-red-800', 'text-cyan-600', 'text-black', 'text-gray-600'];
    return colors[num] || '';
  };

  const getFaceEmoji = () => {
    if (gameState === 'won') return '😎';
    if (gameState === 'lost') return '😵';
    return '🙂';
  };

  return (
    <div className="minesweeper-game select-none">
      {/* Menu bar */}
      <div className="minesweeper-menu">
        <span className="minesweeper-menu-item">Game</span>
        <span className="minesweeper-menu-item">Help</span>
      </div>

      {/* Game container */}
      <div className="minesweeper-container">
        {/* Status bar */}
        <div className="minesweeper-status">
          <div className="minesweeper-counter">
            {String(flagsLeft).padStart(3, '0')}
          </div>
          <button 
            className="minesweeper-face"
            onClick={resetGame}
          >
            {getFaceEmoji()}
          </button>
          <div className="minesweeper-counter">
            {String(time).padStart(3, '0')}
          </div>
        </div>

        {/* Grid */}
        <div className="minesweeper-grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  className={`minesweeper-cell ${cell.isRevealed ? 'revealed' : ''} ${cell.isMine && cell.isRevealed ? 'mine' : ''}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
                >
                  {cell.isRevealed ? (
                    cell.isMine ? (
                      <Bomb size={14} className="text-black" />
                    ) : cell.neighborMines > 0 ? (
                      <span className={`font-bold text-sm ${getNumberColor(cell.neighborMines)}`}>
                        {cell.neighborMines}
                      </span>
                    ) : null
                  ) : cell.isFlagged ? (
                    <Flag size={14} className="text-red-600" />
                  ) : null}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Game over overlay */}
      {gameState !== 'playing' && (
        <div className="minesweeper-overlay">
          <div className="minesweeper-message">
            {gameState === 'won' ? '🎉 You Win!' : '💥 Game Over!'}
            <button 
              className="minesweeper-restart"
              onClick={resetGame}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MinesweeperContent;
