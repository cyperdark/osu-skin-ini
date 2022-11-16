
export const ini_object: ini_type = {
  Name: '',
  Author: '',
  Version: '',

  AnimationFramerate: -1,
  HitCircleOverlayAboveNumber: -1,
  LayeredHitSounds: -1,

  CursorCentre: -1,
  CursorExpand: -1,
  CursorRotate: -1,
  CursorTrailRotate: -1,

  ComboBurstRandom: -1,
  CustomComboBurstSounds: '',

  AllowSliderBallTint: -1,
  SliderBallFlip: -1,

  SpinnerNoBlink: -1,
  SpinnerFadePlayfield: -1,
  SpinnerFrequencyModulate: -1,

  Combo1: '',
  Combo2: '',
  Combo3: '',
  Combo4: '',
  Combo5: '',
  Combo6: '',
  Combo7: '',
  Combo8: '',

  MenuGlow: '',
  InputOverlayText: '',
  SpinnerBackground: '',
  StarBreakAdditive: '',

  SliderBall: '',
  SliderBorder: '',
  SliderTrackOverride: '',


  SongSelectActiveText: '',
  SongSelectInactiveText: '',

  HitCirclePrefix: '',
  HitCircleOverlap: -1,

  ScorePrefix: '',
  ScoreOverlap: -1,

  ComboPrefix: '',
  ComboOverlap: -1,

  HyperDash: '',
  HyperDashFruit: '',
  HyperDashAfterImage: '',

  Mania: [],
};

export interface ini_type {
  Name: string;
  Author: string;
  Version: string;

  AnimationFramerate: number;
  HitCircleOverlayAboveNumber: number;
  LayeredHitSounds: number;

  CursorCentre: number;
  CursorExpand: number;
  CursorRotate: number;
  CursorTrailRotate: number;

  ComboBurstRandom: number;
  CustomComboBurstSounds: string;

  AllowSliderBallTint: number;
  SliderBallFlip: number;

  SpinnerNoBlink: number;
  SpinnerFadePlayfield: number;
  SpinnerFrequencyModulate: number;

  Combo1: string;
  Combo2: string;
  Combo3: string;
  Combo4: string;
  Combo5: string;
  Combo6: string;
  Combo7: string;
  Combo8: string;

  MenuGlow: string;
  InputOverlayText: string;
  SpinnerBackground: string;
  StarBreakAdditive: string;

  SliderBall: string;
  SliderBorder: string;
  SliderTrackOverride: string;


  SongSelectActiveText: string;
  SongSelectInactiveText: string;

  HitCirclePrefix: string;
  HitCircleOverlap: number;

  ScorePrefix: string;
  ScoreOverlap: number;

  ComboPrefix: string;
  ComboOverlap: number;

  HyperDash: string;
  HyperDashFruit: string;
  HyperDashAfterImage: string;

  Mania: {
    Keys: number;
    ColumnStart: string;
    ColumnRight: string;
    ColumnSpacing: string;
    ColumnWidth: string;
    ColumnLineWidth: string;
    BarlineHeight: string;
    LightingNWidth: string;
    LightingLWidth: string;
    WidthForNoteHeightScale: string;
    HitPosition: number;
    LightPosition: number;
    ScorePosition: number;
    ComboPosition: number;
    JudgementLine: number;
    LightFramePerSecond: '';
    SpecialStyle: number;
    ComboBurstStyle: number;
    SplitStages: number;
    StageSeparation: number;
    SeparateScore: number;
    KeysUnderNotes: number;
    UpsideDown: number;
    KeyFlipWhenUpsideDown: number;
    NoteFlipWhenUpsideDown: number;
    KeyFlipWhenUpsideDownD: number;
    NoteFlipWhenUpsideDownH: number;
    NoteFlipWhenUpsideDownL: number;
    NoteFlipWhenUpsideDownT: number;
    NoteBodyStyle: number;
    Colour: string;
    ColourLight: string;
    ColourColumnLine: string;
    ColourBarline: string;
    ColourJudgementLine: string;
    ColourKeyWarning: string;
    ColourHold: string;
    ColourBreak: string;
    KeyImage: string;
    KeyImageD: string;
    NoteImage: string;
    NoteImageH: string;
    NoteImageL: string;
    NoteImageT: string;
    StageLeft: string;
    StageRight: string;
    StageBottom: string;
    StageHint: string;
    StageLight: string;
    LightingN: string;
    LightingL: string;
    WarningArrow: string;
    Hit0: string;
    Hit50: string;
    Hit100: string;
    Hit200: string;
    Hit300: string;
    Hit300g: string;
  }[],
}

export const allowed_properties: string[] = [
  'Name',
  'Author',
  'Version',
  'AnimationFramerate',
  'AllowSliderBallTint',
  'CursorCentre',
  'CursorExpand',
  'CursorRotate',
  'CursorTrailRotate',
  'CustomComboBurstSounds',
  'HitCircleOverlayAboveNumber',
  'LayeredHitSounds',
  'SliderBallFlip',
  'SpinnerFadePlayfield',
  'SpinnerFrequencyModulate',
  'SpinnerNoBlink',
  'Combo',
  'InputOverlayText',
  'MenuGlow',
  'SliderBall',
  'SliderBorder',
  'SliderTrackOverride',
  'SongSelectActiveText',
  'SongSelectInactiveText',
  'SpinnerBackground',
  'StarBreakAdditive',
  'HitCirclePrefix',
  'HitCircleOverlap',
  'ScorePrefix',
  'ScoreOverlap',
  'ComboPrefix',
  'ComboOverlap',
  'HyperDash',
  'HyperDashFruit',
  'HyperDashAfterImage',
  'Keys',
  'ColumnStart',
  'ColumnRight',
  'ColumnSpacing',
  'ColumnWidth',
  'ColumnLineWidth',
  'BarlineHeight',
  'LightingNWidth',
  'LightingLWidth',
  'WidthForNoteHeightScale',
  'HitPosition',
  'LightPosition',
  'ScorePosition',
  'ComboPosition',
  'JudgementLine',
  'LightFramePerSecond',
  'SpecialStyle',
  'ComboBurstStyle',
  'SplitStages',
  'StageSeparation',
  'SeparateScore',
  'KeysUnderNotes',
  'UpsideDown',
  'KeyFlipWhenUpsideDown',
  'NoteFlipWhenUpsideDown',
  'KeyFlipWhenUpsideDownD',
  'NoteFlipWhenUpsideDownH',
  'NoteFlipWhenUpsideDownL',
  'NoteFlipWhenUpsideDownT',
  'NoteBodyStyle',
  'Colour',
  'ColourLight',
  'ColourColumnLine',
  'ColourBarline',
  'ColourJudgementLine',
  'ColourKeyWarning',
  'ColourHold',
  'ColourBreak',
  'KeyImage',
  'KeyImageD',
  'NoteImage',
  'NoteImageH',
  'NoteImageL',
  'NoteImageT',
  'StageLeft',
  'StageRight',
  'StageBottom',
  'StageHint',
  'StageLight',
  'LightingN',
  'LightingL',
  'WarningArrow',
  'Hit0',
  'Hit50',
  'Hit100',
  'Hit200',
  'Hit300',
  'Hit300g',
]