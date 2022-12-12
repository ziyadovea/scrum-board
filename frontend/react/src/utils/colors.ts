import { ColumnType } from './enums'

export const BadgeColorScheme: Record<ColumnType, string> = {
  [ColumnType.TO_DO]: "gray",
  [ColumnType.IN_PROGRESS]: "blue",
  [ColumnType.BLOCKED]: "red",
  [ColumnType.COMPLETED]: "green",
}

export const ColumnColorScheme: Record<ColumnType, string> = {
  [ColumnType.TO_DO]: "#edf2f7",
  [ColumnType.IN_PROGRESS]: "#bee3f8",
  [ColumnType.BLOCKED]: "#fed7d7",
  [ColumnType.COMPLETED]: "#c6f6d5",
}