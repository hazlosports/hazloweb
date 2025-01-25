import React from "react";
import clsx from "clsx";

export function Table({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-border overflow-hidden",
        className
      )}
    >
      <table className="min-w-full bg-[#222222] text-white">{children}</table>
    </div>
  );
}

export function TableHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <thead
      className={clsx("bg-[#333333]", className)}
      style={{ position: "sticky", top: 0, zIndex: 1 }}
    >
      {children}
    </thead>
  );
}

export function TableContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tbody
      className={clsx(className)}
      style={{
        display: "block",
        maxHeight: "250px",
        overflowY: "auto",
        width: "100%",
      }}
    >
      {children}
    </tbody>
  );
}

export function TableRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tr
      className={clsx("border-b border-border", className)}
      style={{ display: "table", tableLayout: "fixed", width: "100%" }}
    >
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td
      className={clsx(
        "px-6 py-4 text-sm font-medium text-white border-r border-border",
        className
      )}
      style={{ minWidth: "150px" }}
    >
      {children}
    </td>
  );
}

export function TableHeaderCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={clsx(
        "px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-white/70 border-r border-border",
        className
      )}
      style={{ minWidth: "150px" }}
    >
      {children}
    </th>
  );
}
