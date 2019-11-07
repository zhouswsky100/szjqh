let devRootPath = '';
let proRootPath = 'http://www.szjqh.cn/';
let rootPath = process.env.NODE_ENV === "production" ? proRootPath : devRootPath;
let imgPath = process.env.NODE_ENV === "production" ? "http://jl.17cai.com/static/img/" : "http://127.0.0.1/static/img/";

const configUrl = {
  seeklist:     rootPath + 'lm/find/1/',
  seekdelete:   rootPath + "lm/delete/",
  findnews:     rootPath + "news/find/",
  newsadd:      rootPath + "news/save",
  adminLogin:   rootPath + "loginin",
  newsdelete:   rootPath + "news/delete/",
  newup:        rootPath + "news/update",
  updateAccount:rootPath + "updateAccount",
  doout :       rootPath+   "doout",
 
  kecheng:       rootPath+   "kecheng/queryAll",
  kechengAdd:    rootPath+   "kecheng/needLogin/save",
  kechengDelete: rootPath+   "kecheng/needLogin/delete",
  kechengUpdate: rootPath+   "kecheng/needLogin/update",

  teacher:         rootPath+          "teacher/queryAll",
  teacherDelete:   rootPath+          "teacher/needLogin/delete",
  teacherUpdate:   rootPath+          "teacher/needLogin/update",
  teacherAdd:   rootPath+          "teacher/needLogin/save",


  hezuo:         rootPath+   "hezuo/queryAll",
  hezuoDelete:   rootPath+   "hezuo/needLogin/delete",
  hezuoUpdate:   rootPath+   "hezuo/needLogin/update",
  hezuoAdd:      rootPath+   "hezuo/needLogin/save",


  wqxc:          rootPath+    "wqxc/queryAll",
  wqxcAdd:       rootPath+    "wqxc/needLogin/save",
  wqxcDelete:    rootPath+    "wqxc/needLogin/delete",
  wqxcUpdate:    rootPath+    "wqxc/needLogin/update",
  webConfig :    rootPath+     "config/query",
  webConfigUpdate :    rootPath+    "config/needLogin/update",
  templateUrl:            "http://www.szjqh.cn/base/userFiles/",

  queryBanner :    rootPath+    "banner/queryAll",
  svaeBanner:      rootPath+     "banner/needLogin/save",
  deleteBanner:    rootPath+    "banner/needLogin/delete",

  yqAdd:          rootPath+     "youqing/needLogin/save",
  yq:             rootPath+      "youqing/find",
  yqUpadate:      rootPath+      "youqing/needLogin/update",
  yqdelete:       rootPath+       "youqing/needLogin/delete",

  dh:             rootPath+        "menu/menu.json",
  dhUpdate:       rootPath+        "config/needLogin/editMenu",
  db:             rootPath+        "menu/menuBottom.json",
  dbUpdate:       rootPath+        "config/needLogin/editBottomMenu",
 
 sql : rootPath+                  "db/needLogin/beifen",
 serverInfo : rootPath+                              "config/needLogin/serverInfo"
};

export default configUrl
