import React from "react";
import { CiCalendar } from "./CiCalendar";
import { FluentNote28Regular } from "./FluentNote28Regular";
import { LucideLayoutDashboard } from "./LucideLayoutDashboard";
import "./style.css";

export const Notepage = () => {
  return (
    <div className="notepage">
      <div className="div">
        <div className="ellipse" />
        <div className="rectangle" />
        <div className="overlap-group">
          <div className="text-wrapper">Visual</div>
          <div className="overlap">
            <div className="text-wrapper-2">Documents</div>
            <FluentNote28Regular className="fluent-note" />
          </div>
          <div className="text-wrapper-3">Dashboard</div>
          <div className="text-wrapper-4">Calendar</div>
          <div className="text-wrapper-5">Notes</div>
          <LucideLayoutDashboard className="lucide-layout" />
          <CiCalendar className="ci-calendar" />
          <FluentNote28Regular className="fluent-note-28-regular" />
        </div>
        <div className="text-wrapper-6">Title</div>
      </div>
    </div>
  );
};
