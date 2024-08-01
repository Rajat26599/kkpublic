import { useState } from "react"
import Carousel from "../../components/carousel/Carousel"

const YoutubeCarousel = () => {
    const [ selected, setSelected ] = useState(0)

    const data = [
        "https://www.youtube.com/embed/vjDoDi5EV8k?si=yb52gRLlQa10UJLu",
        "https://www.youtube.com/embed/TzA180FnL-M?si=iL4N3U3mE_-Ju7Rz",
        "https://www.youtube.com/embed/DZe2aPPX5KA?si=G7v4HQ5AcnJ5PMU_",
        "https://www.youtube.com/embed/Hy2SctNtWwI?si=qkLXafMKpzIZg_Ep"
    ]

    return (
        <Carousel selected={selected} setSelected={setSelected} len={data.length}>
            <iframe src={data[selected]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Carousel>
    )
}

export default YoutubeCarousel