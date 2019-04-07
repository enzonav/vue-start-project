



get_Ls: (var) => {
    localStorage.getItem(var)
}

set_Ls: (var) => {
    localStorage.setItem(var);
}

remove_Ls: (var) => {
    localStorage.removeItem(var)
}

clear_Ls: () => {
    localStorage.clear()
}

reset_Ls: (var) => {
    if(get_Ls(var)){
        remove_Ls(var)
    }
}

{
    localStorage.removeItem(var)
}




  if (!localStorage.getItem('req')) {
        var my_array = [];
        my_array.push(y);
        localStorage.setItem('req', JSON.stringify(my_array));
    } else {
        var my_array1 = JSON.parse(localStorage.getItem('req'));
        my_array1.push(y);
        //var arrayReq = JSON.parse(localStorage.getItem("req"));
        
        localStorage.setItem('req', JSON.stringify(my_array1));
    }
    try {
        myArray = userObj.sections[y].url;
        myArray.push(localStorage.getItem('url'));
    } catch (e) {
        dom.do_msg('lead', 'Si e verificato un errore');
    }
} else {
    if(x === 't' ) localStorage.setItem('active-table', y);
    try {
        localStorage.setItem('url', localStorage.getItem('url') + '&' + x + '=' + y);
        myArray.pop();
        myArray.push(localStorage.getItem('url'));
        //dump.next('localStorage url ' + localStorage.getItem('url'));
    } catch (e) {
        dom.do_msg('lead', 'Si e verificato un errore indefinito');
    }
}