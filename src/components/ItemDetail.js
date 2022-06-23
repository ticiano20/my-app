export const ItemDetail = ({ img, name, description }) => {
    return (
        <div className="fondo">
            <h1>{name}</h1>
            <h3>{description}</h3>
            <img src={img} alt={description} />
            <br />
            {/* <ItemCount stock={5} initial={1} /> */}
            <hr />
        </div>
    )
}