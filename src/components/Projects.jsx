import Data from "../Data"
import Project from "./Project";

export default function Projects() {

    const projectItems = Data.map((item) => {
        return <Project
            key={item.id}
            previewImg={item.preview}
            title={item.title}
            link={item.link}
            gitHub={item.gitLink} />
    })
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-10 m-auto p-3">
            {projectItems}
        </div>

    )
}