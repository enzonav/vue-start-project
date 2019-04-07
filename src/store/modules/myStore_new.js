
const state = {
  const todos = [] 
}

if (main.in_array(x, b.instances)) {
  if (sessionStorage.getItem('url')) {
    sessionStorage.removeItem('url');
  }
  sessionStorage.setItem('url', '?' + x + '=' + y);
  main.get_obj_storage();			
  addToArrayStorage(y);			
  try {
    myArray = userObj.sections[y].url;
    myArray.push(sessionStorage.getItem('url'));
  } catch (e) {
    dom.do_msg('lead', 'Si e verificato un errore');
  }
} else {
  if(x === 't' ) sessionStorage.setItem('active-table', y);
  try {
    sessionStorage.setItem('url', sessionStorage.getItem('url') + '&' + x + '=' + y);
    myArray.pop();
    myArray.push(sessionStorage.getItem('url'));				
  } catch (e) {
    dom.do_msg('lead', 'Si e verificato un errore indefinito');
  }
}

var getObjStorage = function(){
  /* */
  //test = function(){ alert('im alive')}
  reseArrayStorage = function(){
    if(sessionStorage.getItem('req')) sessionStorage.removeItem('req');
    dump.next('eseguito reset Object Storage');
  }
  getArrayStorage = function(){
    if(JSON.parse(sessionStorage.getItem('req'))){
      var my_array = JSON.parse(sessionStorage.getItem("req"));
      return my_array;
    } else return false;			
  }
  setArrStorage = function(array){
    var new_array = sessionStorage.setItem('req', JSON.stringify(array));
    return new_array;			
  }
  addToArrayStorage = function(item, is_empty){
    if(getArrayStorage()){
      var array = getArrayStorage();
      array.push(item);
      setArrStorage(array);
    } else {
      var array = [];
      array.push(item);
      setArrStorage(array);
    }								
  }		
  returnArrayLength =  function(){
    dump.next('im here');
    var keys = Object.keys(getArrayStorage());
    return keys.length;
  }
}

	

