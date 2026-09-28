import Image from "next/image";
import { MediaFrame } from "@/components/ui/media-frame";
import type { Project } from "@/lib/projects/types";
import styles from "./selected-projects.module.css";

export function ProjectPreview({ project, placeholder }: { project: Project; placeholder: string }) {
  const image = project.images[0];

  return (
    <article>
      <MediaFrame>
        <div className={styles.media} data-tone={project.mediaTone}>
          {image ? (
            <Image src={image.src} alt={image.alt} fill
              sizes="(min-width: 1280px) 920px, (min-width: 768px) 70vw, 85vw"
              style={{ objectFit: "contain" }} />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.previewTitle} aria-hidden="true">{project.title}</span>
              <span className={styles.placeholderLabel}>{placeholder}</span>
            </div>
          )}
        </div>
      </MediaFrame>
      <div className={styles.caption}>
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        {project.technologies.length > 0 && (
          <p className={styles.technologies}>{project.technologies.slice(0, 3).join(" · ")}</p>
        )}
      </div>
    </article>
  );
}
