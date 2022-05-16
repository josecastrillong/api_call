async function fetchData(url) {
    try{
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            return data            
        }else {
            const error = new Error ('something went wrong');
            console.error(error);
        }
    }catch(error){
        console.error(error);
    }
}

export default fetchData;
