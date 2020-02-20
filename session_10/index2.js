// const a = {
//     name: 'htm',
//     showInfor: function() {
//         setTimeout(function() {
//             console.log(this.name);
//         }.bind(this), 2000);
//     }
// }

// a.showInfor();

// const a = {
//     name: 'htm',
//     showInfor: function() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 2000);
//     }
// }

// a.showInfor();

// const zingChart = [
//   {
//     id: "ZWB0DFWZ",
//     title: "Hơn Cả Yêu",
//     artists_names: "Đức Phúc",
//     duration: 256
//   },
//   {
//     id: "ZWB0CFA7",
//     title: "Tặng Anh Cho Cô Ấy",
//     artists_names: "Huơng Giang",
//     duration: 285
//   },
//   { id: "ZWB08CEO", title: "Nắm", artists_names: "Hương Ly", duration: 298 },
//   {
//     id: "ZWB0ZB7D",
//     title: "Đừng Khóc Nữa Mà",
//     artists_names: "Gia Huy",
//     duration: 295
//   },
//   {
//     id: "ZWAFE897",
//     title: "Bánh Mì Không",
//     artists_names: "Đạt G",
//     duration: 305
//   }
// ];
// const spotify = [
//   {
//     id: "0DFWZ",
//     title: "On my way",
//     artists_names: "Alan Walker",
//     duration: 255
//   },
//   {
//     id: "0CFA7",
//     title: "Run",
//     artists_names: "Lost frequencies",
//     duration: 325
//   },
//   {
//     id: "08CEO",
//     title: "Heroes tonight",
//     artists_names: "Janji",
//     duration: 345
//   }
// ];
// const allSong = [zingChart, spotify];

// const minute = 60;
// var merged = allSong.reduce(function(mergeArray, itemArray) {
//   mergeArray = mergeArray.concat(itemArray);
//   return mergeArray;
// }, []);
// var fiveMinutesSongs = merged.filter(function(item) {
//     return item.duration > (5*minute);
// }).map(function(item) {
//   return { name: item.title };
// });
// console.log('fiveMinutesSongs', fiveMinutesSongs);

// const zingChart = [
//   { id: 'ZWB0DFWZ', title: 'Hơn Cả Yêu', artists_names: 'Đức Phúc', duration: 256 },
//   { id: 'ZWB0CFA7', title: 'Tặng Anh Cho Cô Ấy', artists_names: 'Huơng Giang', duration: 285 },
//   { id: 'ZWB0CFA7', title: 'Tặng Anh Cho Cô Ấy 2', artists_names: 'Huơng Giang', duration: 285 },
//   { id: 'ZWB08CEO', title: 'Nắm', artists_names: 'Đạt G', duration: 298 },
//   { id: 'ZWB0ZB7D', title: 'Đừng Khóc Nữa Mà', artists_names: 'Đức Phúc', duration: 295 },
//   { id: 'ZWAFE897', title: 'Bánh Mì Không', artists_names: 'Đạt G', duration: 305 }
// ]

// var songByArtists = zingChart.reduce(function(filterArray, song) {
//   var foundArray = filterArray.filter(function(item) {
//     return item.artists_names === song.artists_names;
//   });
//   // artists not exited in filterArray => push new element to filterArray
//   if(foundArray.length == 0) {
//     filterArray.push({
//       artists_names: song.artists_names,
//       songs: [song]
//     });
//   // push song to exited artist
//   } else {
//     foundArray[0].songs.push(song);
//   }
//   return filterArray;
// }, []);
// console.log('songByArtists', songByArtists);

// function buildGreeting(name) {
//   var greeting = "Hello " + name + "!";
//   function greet() {
//     var welcome = greeting + " Nice to meet you!";
//     console.log(welcome);
//   }

//   return greet;
// }

// var sayHello = buildGreeting("Frost");
// sayHello();
// sayHello();

function buildAdder(x) {
  var accumlator = x;

  return function(y) {
    // return accumlator += y;
    console.log('accumlator', accumlator+=y);
  }
}

var adder = buildAdder(1);
adder(2);
adder(3);
adder(4);
// console.log(adder(2));
// console.log(adder(3));
// console.log(adder(4));

var increment =1 ;
console.log(increment++);

for(var i = 0; i < 5; i++) {
  console.log('i++', i)
}

for(var i = 0; i < 5; ++i) {
  console.log('++i', i)
}