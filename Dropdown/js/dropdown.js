/**
 * Show or hide the element with the matching id.
 * @param {string} divId The id of the element to show/hide.
 * @param {boolean} show True to show, false to hide.
 */
function showElement(divId, show) {
  document.getElementById(divId).style.display = (show) ? "inline" : "none";
}

/**
 * Set the value of the element with the matching id.
 * @param {string} divId The id of the element to change.
 * @param {string} value Value to set.
 */
function setValue(divId, value) {
  document.getElementById(divId).value = value;
}
