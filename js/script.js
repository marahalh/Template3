var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



let clipboard = new ClipboardJS('.btn-clip');

var btn = document.getElementById("copy")
 
clipboard.on('success', function (e) {
    let trigger_button = e.trigger;
 
    trigger_button.setAttribute('data-bs-original-title', 'Copied!');
    
 
    let btn_tooltip = bootstrap.Tooltip.getInstance(trigger_button);
    
    btn.focus()

    btn_tooltip.show();

    // reset the tooltip title
 
    trigger_button.setAttribute('data-bs-original-title', 'Copy to Clipboard');
    
});


