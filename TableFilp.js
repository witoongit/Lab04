const click = document.querySelectorAll("td")
for (let index = 0; index < click.length; index++) {
     click[index].addEventListener('click', TableClick);
}

function TableClick(){

    for (let index = 0; index < click.length; index++) {
        if(click[index].className === 'black'){
            click[index].className = 'white'
        }
        else click[index].className = 'black'
    }
}