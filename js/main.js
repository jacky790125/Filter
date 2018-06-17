$(function(){

    var api = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
    var result = [];
    $.ajax({
        method: 'GET',
        url: api,
        dataType: 'json',
        success: function(data){
            var resource = data.result.records;
            getContent(resource);
        }
    });
});

function getContent(resource){
    var page = '';
    var num = 10;

    for(var i = 0; i < num; i++){
        page += templete(resource[i].Name, resource[i].Description, resource[i].Add, 
                          resource[i].Tel, resource[i].Opentime, resource[i].Picture1);
    }
    $(".content").html(page);
}

function templete(name,content,add,tel,time,image){
    var str = '';
    str = `
        <div class = "row d-flex my-2">
            <img src="${image}" class="rounded col-6">
            <div class="my-1 col-6">
                <h2>${name}</h2>
                <p class="mb-1">${content.length>30?content.substr(1, 30)+" ...":content}</p>
                <p class="mb-1"><i class="fas fa-home"></i> ${add}</p>
                <p class="mb-1"><i class="fas fa-phone"></i> ${tel}</p>
                <p class="mb-1"><i class="fas fa-clock"></i> ${time}</p>
            </div>
        </div>
    `;

    return str;
}