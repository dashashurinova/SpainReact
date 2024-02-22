import './PhotoGrid.css';

function PhotoGrid() {
    let ArrayImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <section className="photo-grid">
            {ArrayImg.map((item) => {
                return (<img className="photo-grid__item" key={item} src={require(`../../img/grid/${item}.jpg`)} />)
            })
            }
        </section>
    );
}
export default PhotoGrid;
