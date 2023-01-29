const logout = document.getElementById("logout");
const loading = document.getElementById("loading");
const photoIcon = document.getElementById("photoIcon");
const profileIcon = document.getElementById("profileIcon");
const backBlock = document.getElementById("backBlock");
const profileBox = document.getElementById("profileBox");

const chatBoxContent = document.getElementById("chatBoxContent");

let changePhoto;
let uploadPhoto;
let saveProfile;
let changedImg;

let addFriendBtn;

const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");
const leaveBtn = document.getElementById("leaveBtn");
const profileSetup = document.getElementById("profileSetup");

const friendBtn = document.getElementById("friendBtn");
const chatBtn = document.getElementById("chatBtn");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const listContent = document.getElementById("listContent");

let allUserData;
let addData;
let addedData;
let userData;
let roomList;
let lastMessage = [];

let friendMode = true;
let chatMode = false;
let addMode = false;

let conn;


