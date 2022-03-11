// Created by iWeb 3.0.4 local-build-20140825

function createMediaStream_id3()
{return IWCreatePhotocast("file://localhost/Users/Katherine/UM_SCUBA2/Photos/Pages/Divers_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('file://localhost/Users/Katherine/UM_SCUBA2/Photos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('file://localhost/Users/Katherine/UM_SCUBA2/Photos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(257,257),new IWSize(257,32),new IWSize(257,304),27,27,0,new IWSize(22,29)),new IWPhotoFrame([IWCreateImage('Divers_files/FormalShadow_01.png'),IWCreateImage('Divers_files/FormalShadow_02.png'),IWCreateImage('Divers_files/FormalShadow_03.png'),IWCreateImage('Divers_files/FormalShadow_06.png'),IWCreateImage('Divers_files/FormalShadow_12.png'),IWCreateImage('Divers_files/FormalShadow_11.png'),IWCreateImage('Divers_files/FormalShadow_10.png'),IWCreateImage('Divers_files/FormalShadow_04.png')],null,2,0.650000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Divers_files/DiversMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id4');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
