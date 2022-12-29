function SearchBar(props) {

    const onSubmit = props.onSubmit;
    const onClickHandler = () => {
        onSubmit('cars');
    };

    return (
        <div>
            <input/>
        </div>
    )
}

export default SearchBar;