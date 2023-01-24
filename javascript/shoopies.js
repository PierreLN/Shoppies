

async function search(ele){
    let key = 'e626c0fc'
    let word = ele.value
    let api_url = 'https://www.omdbapi.com/?s=' + word + '&apikey=' + key 
    let responce = await fetch(api_url)
    let data = await responce.json()

    let result_for = document.querySelector('.search_word')
    let list_result = document.querySelector('.list_search')

    result_for.innerHTML = 'Results for ' + word
    let number_li = document.querySelector('.list_search').getElementsByTagName('li').length

    if (data['Response'] === 'True' && number_li < 5) {
        
        for (let i = 0; i < 5; i++) {
            let title = data['Search'][i]['Title'] 
            let year = data['Search'][i]['Year'] 
            let text = title + ' (' + year + ')'
        
            let element = document.createElement('li')
            element.classList.add('list_ele')
            element.innerHTML = text
            
            let button_nominate = document.createElement('button')
            button_nominate.classList.add('button_list')
            button_nominate.innerHTML = 'Nominate'
            button_nominate.addEventListener('click', (e) => {
                let ul_nominate = document.querySelector('.list_nomination')
                let nominated = document.createElement('li')
                nominated.classList.add('list_nominate')
                nominated.innerHTML = text
                
                let button_remove = document.createElement('button')
                button_remove.classList.add('button_list_remove')
                button_remove.innerHTML = 'Remove'
                
                nominated.appendChild(button_remove)
                ul_nominate.appendChild(nominated)  
                
            })

            element.appendChild(button_nominate)
            list_result.appendChild(element)
        }
    }
}


