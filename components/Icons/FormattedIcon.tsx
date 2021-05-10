import React from "react";
import { IconGlobe } from "./Globe";
import { IconInfo } from "./Info";
import { IconWarning } from "./Warning";
import { IconCheck } from "./Check";
import { IconArrow } from "./Arrow";
import { IconGithub } from "./GitHub";
import { IconLinkedIn } from "./LinkedIn";
import { IconInstagram } from "./Instagram";
import { IconTwitter } from "./Twitter";
import { IconMail } from "./Mail";
import { IconLogo } from "./Logo";
import { IconDanger } from "./Danger";
import { IconPlay } from "./Play";
import { RSS } from "./RSS";

export const FormattedIcon = ({ name }) => {
  switch (name) {
    case "RSS":
      return <RSS />;
    case "Play":
      return <IconPlay />;
    case "Logo":
      return <IconLogo />;

    case "danger":
      return <IconDanger />;

    case "Arrow":
      return <IconArrow />;
    case "warning":
      return <IconWarning />;
    case "info":
      return <IconInfo />;
    case "check":
      return <IconCheck />;
    case "Globe":
      return <IconGlobe />;
    case "Github":
      return <IconGithub />;
    case "LinkedIn":
      return <IconLinkedIn />;
    case "Instagram":
      return <IconInstagram />;
    case "Twitter":
      return <IconTwitter />;
    case "Mail":
      return <IconMail />;
    default:
      return <IconGithub />;
  }
};
