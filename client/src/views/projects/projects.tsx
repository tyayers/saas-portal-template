import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from '../../components/main-menu/main-menu';

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import data from "../../assets/data.svg";

import "./projects.css";

import { Auth, User } from "firebase/auth";
import { route } from "preact-router";
import { ProjectDefinition } from "../../types";

export function Projects(props: { path: string, user: User | undefined, auth: Auth, projects: ProjectDefinition[] }) {

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "projects", text: "My Projects", icon: box, route: "/home", selected: true }} />
        <MainMenuItem item={{ id: "workbenches", text: "My Workbenches", icon: flask, route: "/workbenches", selected: false }} />
        <MainMenuItem item={{ id: "datasets", text: "Datasets", icon: data, route: "/datasets", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_panel">
        <div class="main_panel_header">
          Projects <span class="main_panel_header_top_button" onClick={() => route("/new-project")}>+ Create new</span>
        </div>
        {props.projects.map((project) => (
          <div class="main_panel_item" onClick={() => { route("/projects/" + project.id) }}>
            <div class="main_panel_item_header1">{project.name}</div>
            <div class="main_panel_item_header2"><b>Description:</b> {project.description}</div>
            <div class="main_panel_item_header2"><b>Status:</b> {project.status}</div>
            {project.team &&
              <div class="main_panel_item_header2"><b>Team:</b> {project.team}</div>
            }

          </div>
        ))}
      </div>
    </>
  )
}