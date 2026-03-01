import Link from "next/link"
import Image from "next/image"
interface Props{
    title:string,
    image:string
}


const EventCard = ({title,image}:Props) => {
  return (
    <Link href={`/events`} id="event-card">
        <Image src={image} alt={title} height={300} width={410} className="poster"/>
        <p className="title">{title}</p>
    </Link>
  )
}

export default EventCard