"use client";

import React from "react";
import { Meteors } from "./meteors";
import { LinkPreview } from "./link-preview";

type Props = {
  title: string;
  description: string;
  github: string;
  demo: string;
};

export const ProjectCard = ({
  title,
  description,
  github,
  demo,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-xl">
      <Meteors number={15} />

      <div className="relative z-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        <p className="text-neutral-400 text-sm">{description}</p>

        <div className="flex gap-3 pt-2">
          <a
            href={github}
            target="_blank"
            className="text-sm px-4 py-2 rounded-lg bg-white hover:bg-gray-200 transition"
          >
            GitHub
          </a>

          <LinkPreview url={demo}>
            <button
              type="button"
              className="text-sm px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white"
            >
              Live Demo
            </button>
          </LinkPreview>
        </div>
      </div>
    </div>
  );
};