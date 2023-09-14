import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { games } from "../../config/games";

interface Column {
  id: "game" | "players" | "difficulty" | "playTime";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "game", label: "Game", minWidth: 10 },
  { id: "players", label: "Player Count", minWidth: 10 },
  { id: "difficulty", label: "Difficulty", minWidth: 10 },
  { id: "playTime", label: "Play Time (mins)", minWidth: 10 },
];

interface Data {
  game: string;
  players: string;
  difficulty: number;
  playTime: number;
}

function createData(
  game: string,
  players: string,
  difficulty: number,
  playTime: number
): Data {
  return { game, players, difficulty, playTime };
}

const rows = games;

export default function GamesTable() {
  return (
    <Paper sx={{ width: "95%", overflow: "hidden", height: "90%" }}>
      <TableContainer sx={{ maxHeight: "95%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.game}
                  sx={{ cursor: "pointer" }}
                  onClick={() => window.open(row.link, "_blank")}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
