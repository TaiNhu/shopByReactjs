export default function Button({id, check, children}){

    var bo = check
    function handdleClick() {
        var scroll = document.querySelector('.carousel--items')
        if(!bo) {
            scroll.scrollLeft -= document.querySelector('.carosel--item').clientWidth + 55 
        } else {
            scroll.scrollLeft += document.querySelector('.carosel--item').clientWidth + 55 
        }
    }

    return(
        <button 
            id={id}
            onClick={handdleClick} 
        >{children}</button>
    )
}