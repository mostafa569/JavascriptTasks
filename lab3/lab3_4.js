
var library={
    books:[{title:"c++",
        author:"mostafa",
        year:2020
    },
    {title:"java",
        author:"mohamed",
        year:2020
    },
    {title:"oop",
        author:"mahmoud",
        year:2020
    },
]
}
obj(library)

function obj(library){
    for(var property in library){
        for(var i=0;i<library[property].length;i++){
            console.log(library[property][i].title)
        }
    }
}