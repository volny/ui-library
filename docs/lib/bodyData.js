// mimics the bodyData object coming from the backend
// basically, if a global `bodyData` constant is present, components use it's values rather than defaults. (component inline prop overrides backend bodyData overrides component default)

export default {
  colorPrimary: '#ffffff',
  colorPrimaryAlpha90: 'rgba(255,255, 255,0.9)',
  colorPrimaryAlpha70: 'rgba(255,255, 255,0.7)',
  colorPrimaryAlpha30: 'rgba(255,255, 255,0.3)',
  colorSecondary: '#000000',
  colorSecondaryAlpha70: 'rgba(0,0, 0,0.7)',
  colorSecondaryAlpha50: 'rgba(0,0, 0,0.5)',
  colorSecondaryAlpha30: 'rgba(0,0, 0,0.3)',
  colorSecondaryAlpha10: 'rgba(0,0, 0,0.1)',
  colorAccent: '#008800',
  colorAccentAlpha30: 'rgba(0,136, 0,0.3)',
  colorAccentAlpha20: 'rgba(0,136, 0,0.2)',

  fontNormal: 'franklin-gothic-urw-cond,sans-serif',
  colorWarning: '#bf5353',
  color_status_a: '#008800',
  color_status_b: '#fff266',
  color_status_c: '#f96a4e',
  color_status_d: '#ddd3d5',
};
