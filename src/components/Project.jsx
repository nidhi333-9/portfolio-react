
export default function Project(props) {
    return (
        <div className="bg-teal-600 rounded-md p-1 relative">
            <div className="relative">
                <img src={props.previewImg} width={500} height={250} alt="" />
                {/* <p className="absolute text-teal-600 text-2xl font-semibold p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{props.title}</p> */}
            </div>

            <div className="flex justify-evenly">

                <a
                    href={props.link}
                    className="text-medium font-semibold text-white py-2 px-2 align-middle rounded-md"
                    target="_blank" rel="noreferrer">
                    View Demo
                </a>
                <a
                    href={props.gitHub}
                    className="text-medium font-semibold text-white py-2 px-2 align-middle rounded-md"
                    target="_blank" rel="noreferrer">
                    Source Code
                </a>
            </div>
        </div>
    )
}