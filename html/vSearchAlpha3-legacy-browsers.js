﻿/********************** 
 * Vsearchalpha3 Test *
 **********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'vSearchAlpha3';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
flowScheduler.add(fixation1RoutineBegin());
flowScheduler.add(fixation1RoutineEachFrame());
flowScheduler.add(fixation1RoutineEnd());
const trials1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials1LoopBegin, trials1LoopScheduler);
flowScheduler.add(trials1LoopScheduler);
flowScheduler.add(trials1LoopEnd);
flowScheduler.add(breakTime1RoutineBegin());
flowScheduler.add(breakTime1RoutineEachFrame());
flowScheduler.add(breakTime1RoutineEnd());
flowScheduler.add(fixation2RoutineBegin());
flowScheduler.add(fixation2RoutineEachFrame());
flowScheduler.add(fixation2RoutineEnd());
const trials2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials2LoopBegin, trials2LoopScheduler);
flowScheduler.add(trials2LoopScheduler);
flowScheduler.add(trials2LoopEnd);
flowScheduler.add(breakTime2RoutineBegin());
flowScheduler.add(breakTime2RoutineEachFrame());
flowScheduler.add(breakTime2RoutineEnd());
flowScheduler.add(fixation3RoutineBegin());
flowScheduler.add(fixation3RoutineEachFrame());
flowScheduler.add(fixation3RoutineEnd());
const trials3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials3LoopBegin, trials3LoopScheduler);
flowScheduler.add(trials3LoopScheduler);
flowScheduler.add(trials3LoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instruction1Clock;
var instr1;
var keyResp1;
var l1ex;
var l2ex;
var t1ex;
var tTex;
var fixation1Clock;
var fix1;
var trial1Clock;
var trial1Fix;
var trial1L11;
var trial1L12;
var trial1L21;
var trial1L22;
var trial1T11;
var trial1T12;
var trial1TT;
var trial1Resp;
var breakTime1Clock;
var breakText1;
var breakResp1;
var fixation2Clock;
var fix2;
var trial2Clock;
var trial2Fix;
var trial2L11;
var trial2L12;
var trial2L21;
var trial2L22;
var trial2T11;
var trial2T12;
var trial2TT;
var trial2Resp;
var breakTime2Clock;
var breakText2;
var breakResp2;
var fixation3Clock;
var fix3;
var trial3Clock;
var trial3Fix;
var Trial3L11;
var Trial3L12;
var Trial3L21;
var Trial3L22;
var Trial3T11;
var Trial3T12;
var Trial3TT;
var trial3Resp;
var endClock;
var thanks;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr1',
    text: 'In this task you will see sets of shapes made of four different shapes as outlined below. Only press space if you see the “T” shape, which is the last shape. Otherwise, do not respond. Press space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keyResp1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  l1ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l1ex', units : undefined, 
    image : 'L1.png', mask : undefined,
    ori : 0, pos : [(- 0.3), (- 0.15)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  l2ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l2ex', units : undefined, 
    image : 'L2.png', mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.15)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  t1ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 't1ex', units : undefined, 
    image : 'T1.png', mask : undefined,
    ori : 0, pos : [0.1, (- 0.15)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  tTex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tTex', units : undefined, 
    image : 'TT.png', mask : undefined,
    ori : 0, pos : [0.3, (- 0.15)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "fixation1"
  fixation1Clock = new util.Clock();
  fix1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial1"
  trial1Clock = new util.Clock();
  trial1Fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial1Fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  trial1L11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial1L11', units : undefined, 
    image : 'L1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  trial1L12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial1L12', units : undefined, 
    image : 'L1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  trial1L21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial1L21', units : undefined, 
    image : 'L2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  trial1L22 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial1L22', units : undefined, 
    image : 'L2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  trial1T11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial1T11', units : undefined, 
    image : 'T1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  trial1T12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial1T12', units : undefined, 
    image : 'T1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  trial1TT = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial1TT', units : undefined, 
    image : 'TT.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  trial1Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "breakTime1"
  breakTime1Clock = new util.Clock();
  breakText1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakText1',
    text: 'A quick break before the next set of trials.\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  breakResp1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation2"
  fixation2Clock = new util.Clock();
  fix2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial2"
  trial2Clock = new util.Clock();
  trial2Fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial2Fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  trial2L11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial2L11', units : undefined, 
    image : 'L1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  trial2L12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial2L12', units : undefined, 
    image : 'L1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  trial2L21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial2L21', units : undefined, 
    image : 'L2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  trial2L22 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial2L22', units : undefined, 
    image : 'L2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  trial2T11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial2T11', units : undefined, 
    image : 'T1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  trial2T12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial2T12', units : undefined, 
    image : 'T1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  trial2TT = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial2TT', units : undefined, 
    image : 'TT.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  trial2Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "breakTime2"
  breakTime2Clock = new util.Clock();
  breakText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakText2',
    text: 'A quick break before the next set of trials.\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  breakResp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation3"
  fixation3Clock = new util.Clock();
  fix3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial3"
  trial3Clock = new util.Clock();
  trial3Fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial3Fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Trial3L11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trial3L11', units : undefined, 
    image : 'L1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Trial3L12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trial3L12', units : undefined, 
    image : 'L1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Trial3L21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trial3L21', units : undefined, 
    image : 'L2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  Trial3L22 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trial3L22', units : undefined, 
    image : 'L2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  Trial3T11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trial3T11', units : undefined, 
    image : 'T1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  Trial3T12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trial3T12', units : undefined, 
    image : 'T1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  Trial3TT = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trial3TT', units : undefined, 
    image : 'TT.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  trial3Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'This is the end of the experiment.\nThank you for your time.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _keyResp1_allKeys;
var instruction1Components;
function instruction1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction1'-------
    t = 0;
    instruction1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyResp1.keys = undefined;
    keyResp1.rt = undefined;
    _keyResp1_allKeys = [];
    // keep track of which components have finished
    instruction1Components = [];
    instruction1Components.push(instr1);
    instruction1Components.push(keyResp1);
    instruction1Components.push(l1ex);
    instruction1Components.push(l2ex);
    instruction1Components.push(t1ex);
    instruction1Components.push(tTex);
    
    instruction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instruction1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr1* updates
    if (t >= 0.0 && instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1.tStart = t;  // (not accounting for frame time here)
      instr1.frameNStart = frameN;  // exact frame index
      
      instr1.setAutoDraw(true);
    }

    
    // *keyResp1* updates
    if (t >= 0.0 && keyResp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyResp1.tStart = t;  // (not accounting for frame time here)
      keyResp1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyResp1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyResp1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyResp1.clearEvents(); });
    }

    if (keyResp1.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyResp1.getKeys({keyList: ['space'], waitRelease: false});
      _keyResp1_allKeys = _keyResp1_allKeys.concat(theseKeys);
      if (_keyResp1_allKeys.length > 0) {
        keyResp1.keys = _keyResp1_allKeys[_keyResp1_allKeys.length - 1].name;  // just the last key pressed
        keyResp1.rt = _keyResp1_allKeys[_keyResp1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *l1ex* updates
    if (t >= 0.0 && l1ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l1ex.tStart = t;  // (not accounting for frame time here)
      l1ex.frameNStart = frameN;  // exact frame index
      
      l1ex.setAutoDraw(true);
    }

    
    // *l2ex* updates
    if (t >= 0.0 && l2ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l2ex.tStart = t;  // (not accounting for frame time here)
      l2ex.frameNStart = frameN;  // exact frame index
      
      l2ex.setAutoDraw(true);
    }

    
    // *t1ex* updates
    if (t >= 0.0 && t1ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1ex.tStart = t;  // (not accounting for frame time here)
      t1ex.frameNStart = frameN;  // exact frame index
      
      t1ex.setAutoDraw(true);
    }

    
    // *tTex* updates
    if (t >= 0.0 && tTex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tTex.tStart = t;  // (not accounting for frame time here)
      tTex.frameNStart = frameN;  // exact frame index
      
      tTex.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction1'-------
    instruction1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('keyResp1.keys', keyResp1.keys);
    if (typeof keyResp1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyResp1.rt', keyResp1.rt);
        routineTimer.reset();
        }
    
    keyResp1.stop();
    // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixation1Components;
function fixation1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation1'-------
    t = 0;
    fixation1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation1Components = [];
    fixation1Components.push(fix1);
    
    fixation1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function fixation1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixation1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix1* updates
    if (t >= 0.0 && fix1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix1.tStart = t;  // (not accounting for frame time here)
      fix1.frameNStart = frameN;  // exact frame index
      
      fix1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixation1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation1'-------
    fixation1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var trials1;
var currentLoop;
function trials1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'vSearchCond1.xlsx',
    seed: undefined, name: 'trials1'
  });
  psychoJS.experiment.addLoop(trials1); // add the loop to the experiment
  currentLoop = trials1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials1.forEach(function() {
    const snapshot = trials1.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial1RoutineBegin(snapshot));
    thisScheduler.add(trial1RoutineEachFrame(snapshot));
    thisScheduler.add(trial1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials1LoopEnd() {
  psychoJS.experiment.removeLoop(trials1);

  return Scheduler.Event.NEXT;
}


var trials2;
function trials2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'vSearchCond2.xlsx',
    seed: undefined, name: 'trials2'
  });
  psychoJS.experiment.addLoop(trials2); // add the loop to the experiment
  currentLoop = trials2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials2.forEach(function() {
    const snapshot = trials2.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial2RoutineBegin(snapshot));
    thisScheduler.add(trial2RoutineEachFrame(snapshot));
    thisScheduler.add(trial2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials2LoopEnd() {
  psychoJS.experiment.removeLoop(trials2);

  return Scheduler.Event.NEXT;
}


var trials3;
function trials3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'vSearchCond3.xlsx',
    seed: undefined, name: 'trials3'
  });
  psychoJS.experiment.addLoop(trials3); // add the loop to the experiment
  currentLoop = trials3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials3.forEach(function() {
    const snapshot = trials3.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial3RoutineBegin(snapshot));
    thisScheduler.add(trial3RoutineEachFrame(snapshot));
    thisScheduler.add(trial3RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials3LoopEnd() {
  psychoJS.experiment.removeLoop(trials3);

  return Scheduler.Event.NEXT;
}


var _trial1Resp_allKeys;
var trial1Components;
function trial1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial1'-------
    t = 0;
    trial1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    trial1L11.setPos([loc1, loc2]);
    trial1L12.setPos([loc3, loc4]);
    trial1L21.setPos([loc5, loc6]);
    trial1L22.setPos([loc7, loc8]);
    trial1T11.setPos([loc9, loc10]);
    trial1T12.setPos([loc11, loc12]);
    trial1TT.setPos([loc13, loc14]);
    trial1Resp.keys = undefined;
    trial1Resp.rt = undefined;
    _trial1Resp_allKeys = [];
    // keep track of which components have finished
    trial1Components = [];
    trial1Components.push(trial1Fix);
    trial1Components.push(trial1L11);
    trial1Components.push(trial1L12);
    trial1Components.push(trial1L21);
    trial1Components.push(trial1L22);
    trial1Components.push(trial1T11);
    trial1Components.push(trial1T12);
    trial1Components.push(trial1TT);
    trial1Components.push(trial1Resp);
    
    trial1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trial1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial1Fix* updates
    if (t >= 3.0 && trial1Fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Fix.tStart = t;  // (not accounting for frame time here)
      trial1Fix.frameNStart = frameN;  // exact frame index
      
      trial1Fix.setAutoDraw(true);
    }

    frameRemains = 3.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1Fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1Fix.setAutoDraw(false);
    }
    
    // *trial1L11* updates
    if (t >= 0.0 && trial1L11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1L11.tStart = t;  // (not accounting for frame time here)
      trial1L11.frameNStart = frameN;  // exact frame index
      
      trial1L11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1L11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1L11.setAutoDraw(false);
    }
    
    // *trial1L12* updates
    if (t >= 0.0 && trial1L12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1L12.tStart = t;  // (not accounting for frame time here)
      trial1L12.frameNStart = frameN;  // exact frame index
      
      trial1L12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1L12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1L12.setAutoDraw(false);
    }
    
    // *trial1L21* updates
    if (t >= 0.0 && trial1L21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1L21.tStart = t;  // (not accounting for frame time here)
      trial1L21.frameNStart = frameN;  // exact frame index
      
      trial1L21.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1L21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1L21.setAutoDraw(false);
    }
    
    // *trial1L22* updates
    if (t >= 0.0 && trial1L22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1L22.tStart = t;  // (not accounting for frame time here)
      trial1L22.frameNStart = frameN;  // exact frame index
      
      trial1L22.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1L22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1L22.setAutoDraw(false);
    }
    
    // *trial1T11* updates
    if (t >= 0.0 && trial1T11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1T11.tStart = t;  // (not accounting for frame time here)
      trial1T11.frameNStart = frameN;  // exact frame index
      
      trial1T11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1T11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1T11.setAutoDraw(false);
    }
    
    // *trial1T12* updates
    if (t >= 0.0 && trial1T12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1T12.tStart = t;  // (not accounting for frame time here)
      trial1T12.frameNStart = frameN;  // exact frame index
      
      trial1T12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1T12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1T12.setAutoDraw(false);
    }
    
    // *trial1TT* updates
    if (t >= 0.0 && trial1TT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1TT.tStart = t;  // (not accounting for frame time here)
      trial1TT.frameNStart = frameN;  // exact frame index
      
      trial1TT.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1TT.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1TT.setAutoDraw(false);
    }
    
    // *trial1Resp* updates
    if (t >= 0.0 && trial1Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Resp.tStart = t;  // (not accounting for frame time here)
      trial1Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial1Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial1Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial1Resp.clearEvents(); });
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial1Resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial1Resp.status = PsychoJS.Status.FINISHED;
  }

    if (trial1Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial1Resp.getKeys({keyList: ['space'], waitRelease: false});
      _trial1Resp_allKeys = _trial1Resp_allKeys.concat(theseKeys);
      if (_trial1Resp_allKeys.length > 0) {
        trial1Resp.keys = _trial1Resp_allKeys[_trial1Resp_allKeys.length - 1].name;  // just the last key pressed
        trial1Resp.rt = _trial1Resp_allKeys[_trial1Resp_allKeys.length - 1].rt;
        // was this correct?
        if (trial1Resp.keys == corrAns) {
            trial1Resp.corr = 1;
        } else {
            trial1Resp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial1'-------
    trial1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (trial1Resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         trial1Resp.corr = 1;  // correct non-response
      } else {
         trial1Resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial1Resp.keys', trial1Resp.keys);
    psychoJS.experiment.addData('trial1Resp.corr', trial1Resp.corr);
    if (typeof trial1Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial1Resp.rt', trial1Resp.rt);
        }
    
    trial1Resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _breakResp1_allKeys;
var breakTime1Components;
function breakTime1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'breakTime1'-------
    t = 0;
    breakTime1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    breakResp1.keys = undefined;
    breakResp1.rt = undefined;
    _breakResp1_allKeys = [];
    // keep track of which components have finished
    breakTime1Components = [];
    breakTime1Components.push(breakText1);
    breakTime1Components.push(breakResp1);
    
    breakTime1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function breakTime1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'breakTime1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = breakTime1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakText1* updates
    if (t >= 0.0 && breakText1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakText1.tStart = t;  // (not accounting for frame time here)
      breakText1.frameNStart = frameN;  // exact frame index
      
      breakText1.setAutoDraw(true);
    }

    
    // *breakResp1* updates
    if (t >= 0.0 && breakResp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakResp1.tStart = t;  // (not accounting for frame time here)
      breakResp1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { breakResp1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { breakResp1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { breakResp1.clearEvents(); });
    }

    if (breakResp1.status === PsychoJS.Status.STARTED) {
      let theseKeys = breakResp1.getKeys({keyList: ['space'], waitRelease: false});
      _breakResp1_allKeys = _breakResp1_allKeys.concat(theseKeys);
      if (_breakResp1_allKeys.length > 0) {
        breakResp1.keys = _breakResp1_allKeys[_breakResp1_allKeys.length - 1].name;  // just the last key pressed
        breakResp1.rt = _breakResp1_allKeys[_breakResp1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    breakTime1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function breakTime1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'breakTime1'-------
    breakTime1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('breakResp1.keys', breakResp1.keys);
    if (typeof breakResp1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('breakResp1.rt', breakResp1.rt);
        routineTimer.reset();
        }
    
    breakResp1.stop();
    // the Routine "breakTime1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixation2Components;
function fixation2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation2'-------
    t = 0;
    fixation2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation2Components = [];
    fixation2Components.push(fix2);
    
    fixation2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function fixation2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixation2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix2* updates
    if (t >= 0.0 && fix2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix2.tStart = t;  // (not accounting for frame time here)
      fix2.frameNStart = frameN;  // exact frame index
      
      fix2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixation2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation2'-------
    fixation2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _trial2Resp_allKeys;
var trial2Components;
function trial2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial2'-------
    t = 0;
    trial2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    trial2L11.setPos([loc1, loc2]);
    trial2L12.setPos([loc3, loc4]);
    trial2L21.setPos([loc5, loc6]);
    trial2L22.setPos([loc7, loc8]);
    trial2T11.setPos([loc9, loc10]);
    trial2T12.setPos([loc11, loc12]);
    trial2TT.setPos([loc13, loc14]);
    trial2Resp.keys = undefined;
    trial2Resp.rt = undefined;
    _trial2Resp_allKeys = [];
    // keep track of which components have finished
    trial2Components = [];
    trial2Components.push(trial2Fix);
    trial2Components.push(trial2L11);
    trial2Components.push(trial2L12);
    trial2Components.push(trial2L21);
    trial2Components.push(trial2L22);
    trial2Components.push(trial2T11);
    trial2Components.push(trial2T12);
    trial2Components.push(trial2TT);
    trial2Components.push(trial2Resp);
    
    trial2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trial2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial2Fix* updates
    if (t >= 3.0 && trial2Fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2Fix.tStart = t;  // (not accounting for frame time here)
      trial2Fix.frameNStart = frameN;  // exact frame index
      
      trial2Fix.setAutoDraw(true);
    }

    frameRemains = 3.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2Fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2Fix.setAutoDraw(false);
    }
    
    // *trial2L11* updates
    if (t >= 0.0 && trial2L11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2L11.tStart = t;  // (not accounting for frame time here)
      trial2L11.frameNStart = frameN;  // exact frame index
      
      trial2L11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2L11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2L11.setAutoDraw(false);
    }
    
    // *trial2L12* updates
    if (t >= 0.0 && trial2L12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2L12.tStart = t;  // (not accounting for frame time here)
      trial2L12.frameNStart = frameN;  // exact frame index
      
      trial2L12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2L12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2L12.setAutoDraw(false);
    }
    
    // *trial2L21* updates
    if (t >= 0.0 && trial2L21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2L21.tStart = t;  // (not accounting for frame time here)
      trial2L21.frameNStart = frameN;  // exact frame index
      
      trial2L21.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2L21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2L21.setAutoDraw(false);
    }
    
    // *trial2L22* updates
    if (t >= 0.0 && trial2L22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2L22.tStart = t;  // (not accounting for frame time here)
      trial2L22.frameNStart = frameN;  // exact frame index
      
      trial2L22.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2L22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2L22.setAutoDraw(false);
    }
    
    // *trial2T11* updates
    if (t >= 0.0 && trial2T11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2T11.tStart = t;  // (not accounting for frame time here)
      trial2T11.frameNStart = frameN;  // exact frame index
      
      trial2T11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2T11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2T11.setAutoDraw(false);
    }
    
    // *trial2T12* updates
    if (t >= 0.0 && trial2T12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2T12.tStart = t;  // (not accounting for frame time here)
      trial2T12.frameNStart = frameN;  // exact frame index
      
      trial2T12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2T12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2T12.setAutoDraw(false);
    }
    
    // *trial2TT* updates
    if (t >= 0.0 && trial2TT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2TT.tStart = t;  // (not accounting for frame time here)
      trial2TT.frameNStart = frameN;  // exact frame index
      
      trial2TT.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2TT.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2TT.setAutoDraw(false);
    }
    
    // *trial2Resp* updates
    if (t >= 0.0 && trial2Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2Resp.tStart = t;  // (not accounting for frame time here)
      trial2Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial2Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial2Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial2Resp.clearEvents(); });
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial2Resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial2Resp.status = PsychoJS.Status.FINISHED;
  }

    if (trial2Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial2Resp.getKeys({keyList: ['space'], waitRelease: false});
      _trial2Resp_allKeys = _trial2Resp_allKeys.concat(theseKeys);
      if (_trial2Resp_allKeys.length > 0) {
        trial2Resp.keys = _trial2Resp_allKeys[_trial2Resp_allKeys.length - 1].name;  // just the last key pressed
        trial2Resp.rt = _trial2Resp_allKeys[_trial2Resp_allKeys.length - 1].rt;
        // was this correct?
        if (trial2Resp.keys == corrAns) {
            trial2Resp.corr = 1;
        } else {
            trial2Resp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial2'-------
    trial2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (trial2Resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         trial2Resp.corr = 1;  // correct non-response
      } else {
         trial2Resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial2Resp.keys', trial2Resp.keys);
    psychoJS.experiment.addData('trial2Resp.corr', trial2Resp.corr);
    if (typeof trial2Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial2Resp.rt', trial2Resp.rt);
        }
    
    trial2Resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _breakResp2_allKeys;
var breakTime2Components;
function breakTime2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'breakTime2'-------
    t = 0;
    breakTime2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    breakResp2.keys = undefined;
    breakResp2.rt = undefined;
    _breakResp2_allKeys = [];
    // keep track of which components have finished
    breakTime2Components = [];
    breakTime2Components.push(breakText2);
    breakTime2Components.push(breakResp2);
    
    breakTime2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function breakTime2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'breakTime2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = breakTime2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakText2* updates
    if (t >= 0.0 && breakText2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakText2.tStart = t;  // (not accounting for frame time here)
      breakText2.frameNStart = frameN;  // exact frame index
      
      breakText2.setAutoDraw(true);
    }

    
    // *breakResp2* updates
    if (t >= 0.0 && breakResp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakResp2.tStart = t;  // (not accounting for frame time here)
      breakResp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { breakResp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { breakResp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { breakResp2.clearEvents(); });
    }

    if (breakResp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = breakResp2.getKeys({keyList: ['space'], waitRelease: false});
      _breakResp2_allKeys = _breakResp2_allKeys.concat(theseKeys);
      if (_breakResp2_allKeys.length > 0) {
        breakResp2.keys = _breakResp2_allKeys[_breakResp2_allKeys.length - 1].name;  // just the last key pressed
        breakResp2.rt = _breakResp2_allKeys[_breakResp2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    breakTime2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function breakTime2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'breakTime2'-------
    breakTime2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('breakResp2.keys', breakResp2.keys);
    if (typeof breakResp2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('breakResp2.rt', breakResp2.rt);
        routineTimer.reset();
        }
    
    breakResp2.stop();
    // the Routine "breakTime2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixation3Components;
function fixation3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation3'-------
    t = 0;
    fixation3Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation3Components = [];
    fixation3Components.push(fix3);
    
    fixation3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function fixation3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixation3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix3* updates
    if (t >= 0.0 && fix3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix3.tStart = t;  // (not accounting for frame time here)
      fix3.frameNStart = frameN;  // exact frame index
      
      fix3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixation3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation3'-------
    fixation3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _trial3Resp_allKeys;
var trial3Components;
function trial3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial3'-------
    t = 0;
    trial3Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    Trial3L11.setPos([loc1, loc2]);
    Trial3L12.setPos([loc3, loc4]);
    Trial3L21.setPos([loc5, loc6]);
    Trial3L22.setPos([loc7, loc8]);
    Trial3T11.setPos([loc9, loc10]);
    Trial3T12.setPos([loc11, loc12]);
    Trial3TT.setPos([loc13, loc14]);
    trial3Resp.keys = undefined;
    trial3Resp.rt = undefined;
    _trial3Resp_allKeys = [];
    // keep track of which components have finished
    trial3Components = [];
    trial3Components.push(trial3Fix);
    trial3Components.push(Trial3L11);
    trial3Components.push(Trial3L12);
    trial3Components.push(Trial3L21);
    trial3Components.push(Trial3L22);
    trial3Components.push(Trial3T11);
    trial3Components.push(Trial3T12);
    trial3Components.push(Trial3TT);
    trial3Components.push(trial3Resp);
    
    trial3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trial3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial3Fix* updates
    if (t >= 3.0 && trial3Fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial3Fix.tStart = t;  // (not accounting for frame time here)
      trial3Fix.frameNStart = frameN;  // exact frame index
      
      trial3Fix.setAutoDraw(true);
    }

    frameRemains = 3.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial3Fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial3Fix.setAutoDraw(false);
    }
    
    // *Trial3L11* updates
    if (t >= 0.0 && Trial3L11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial3L11.tStart = t;  // (not accounting for frame time here)
      Trial3L11.frameNStart = frameN;  // exact frame index
      
      Trial3L11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Trial3L11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Trial3L11.setAutoDraw(false);
    }
    
    // *Trial3L12* updates
    if (t >= 0.0 && Trial3L12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial3L12.tStart = t;  // (not accounting for frame time here)
      Trial3L12.frameNStart = frameN;  // exact frame index
      
      Trial3L12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Trial3L12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Trial3L12.setAutoDraw(false);
    }
    
    // *Trial3L21* updates
    if (t >= 0.0 && Trial3L21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial3L21.tStart = t;  // (not accounting for frame time here)
      Trial3L21.frameNStart = frameN;  // exact frame index
      
      Trial3L21.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Trial3L21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Trial3L21.setAutoDraw(false);
    }
    
    // *Trial3L22* updates
    if (t >= 0.0 && Trial3L22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial3L22.tStart = t;  // (not accounting for frame time here)
      Trial3L22.frameNStart = frameN;  // exact frame index
      
      Trial3L22.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Trial3L22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Trial3L22.setAutoDraw(false);
    }
    
    // *Trial3T11* updates
    if (t >= 0.0 && Trial3T11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial3T11.tStart = t;  // (not accounting for frame time here)
      Trial3T11.frameNStart = frameN;  // exact frame index
      
      Trial3T11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Trial3T11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Trial3T11.setAutoDraw(false);
    }
    
    // *Trial3T12* updates
    if (t >= 0.0 && Trial3T12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial3T12.tStart = t;  // (not accounting for frame time here)
      Trial3T12.frameNStart = frameN;  // exact frame index
      
      Trial3T12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Trial3T12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Trial3T12.setAutoDraw(false);
    }
    
    // *Trial3TT* updates
    if (t >= 0.0 && Trial3TT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial3TT.tStart = t;  // (not accounting for frame time here)
      Trial3TT.frameNStart = frameN;  // exact frame index
      
      Trial3TT.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Trial3TT.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Trial3TT.setAutoDraw(false);
    }
    
    // *trial3Resp* updates
    if (t >= 0.0 && trial3Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial3Resp.tStart = t;  // (not accounting for frame time here)
      trial3Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial3Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial3Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial3Resp.clearEvents(); });
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial3Resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial3Resp.status = PsychoJS.Status.FINISHED;
  }

    if (trial3Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial3Resp.getKeys({keyList: ['space'], waitRelease: false});
      _trial3Resp_allKeys = _trial3Resp_allKeys.concat(theseKeys);
      if (_trial3Resp_allKeys.length > 0) {
        trial3Resp.keys = _trial3Resp_allKeys[_trial3Resp_allKeys.length - 1].name;  // just the last key pressed
        trial3Resp.rt = _trial3Resp_allKeys[_trial3Resp_allKeys.length - 1].rt;
        // was this correct?
        if (trial3Resp.keys == corrAns) {
            trial3Resp.corr = 1;
        } else {
            trial3Resp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial3'-------
    trial3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (trial3Resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         trial3Resp.corr = 1;  // correct non-response
      } else {
         trial3Resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial3Resp.keys', trial3Resp.keys);
    psychoJS.experiment.addData('trial3Resp.corr', trial3Resp.corr);
    if (typeof trial3Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial3Resp.rt', trial3Resp.rt);
        }
    
    trial3Resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(thanks);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
