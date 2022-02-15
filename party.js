<script>
if(party === undefined) var party = {};
if(typeof CCSE == 'undefined') { Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js'); }

party.launch = function(){
party.isLoaded = 1;
Game.customOptionsMenu.push(function(){
	CCSE.AppendCollapsibleOptionsMenu("Party Button", '<button onclick="lol()">Party toggle</button>');
});
}

if(!party.isLoaded){
	if(CCSE && CCSE.isLoaded){
		party.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(party.launch);
	}
  function lol()
  {
    var toggled = false;
    
    if(toggled == true)
    {
      toggled = false;
      Game.Party = false;
      
    }
    else if(toggled == false)
    {
      toggled = true;
      Game.Party = true;
    }
  }
</script>
