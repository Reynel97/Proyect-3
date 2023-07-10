import './styles/ResidentList.css'
const LocationInfo = ({ location}) => {

    return(
      <article className="resident__info2">
        <h2 className="resident__h2">{location?.name}</h2>
        <ul className="resident__list2">
            <li className="resident__list3"><span>Type: </span><span>{location?.type}</span></li>
            <li className="resident__list3"><span>Dimension: </span><span>{location?.dimension}</span></li>
            <li className="resident__list3"><span>Population: </span><span>{location?.residents.length}</span></li>
        </ul>
      </article>
    )
}

export default LocationInfo