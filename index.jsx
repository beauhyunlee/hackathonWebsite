import React from "react";
import { CiCalendar } from "./CiCalendar";
import { FluentNote28Regular } from "./FluentNote28Regular";
import { LucideLayoutDashboard } from "./LucideLayoutDashboard";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div">
        <div className="ellipse" />
        <div className="overlap-group">
          <div className="text-wrapper">Visual</div>
          <div className="overlap">
            <div className="text-wrapper-2">Dashboard</div>
            <LucideLayoutDashboard className="lucide-layout" />
          </div>
          <div className="text-wrapper-3">Calendar</div>
          <div className="text-wrapper-4">Notes</div>
          <CiCalendar className="ci-calendar" />
          <FluentNote28Regular className="fluent-note" />
        </div>
        <div className="calendar-square" />
        <div className="calendar-text">Calendar</div>
        <div className="documents">
          <div className="documents-2" />
          <div className="documents-3" />
          <div className="documents-4" />
          <div className="documents-5" />
          <div className="documents-text">Documents</div>
        </div>
        <div className="sticky-notes">
          <div className="sticky-note" />
          <div className="sticky-note-2" />
          <div className="sticky-note-3" />
          <div className="sticky-note-4" />
          <div className="sticky-notes-text">Sticky Notes</div>
        </div>
        <div className="iconamoon-search-wrapper">
          <img className="iconamoon-search" alt="Iconamoon search" src="iconamoon-search-bold.svg" />
        </div>
      </div>
    </div>
  );
};
