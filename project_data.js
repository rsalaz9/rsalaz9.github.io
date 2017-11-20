var projects = [
	{"name": "Chicago Food Inspection Search", "display": false, "description" : "Developed a site that parses through the Chicago Data Portal Facility Food inspections API and contains three screens: input form, filtered styled text results and maps results with the Google maps API.", "image" : "./img/project3.jpg", "link" : "https://rsalaz9.github.io/IT202/project3/"},
	{"name": "Collision Game", "display" : true ,"description" : "Developed a graphical collision game that demonstrates ability with the HTML canvas element and using JavaScript language features.", "image" : "./img/project4.jpg", "link" : "https://rsalaz9.github.io/IT202/project4/"},
    {"name": "Air horner application", "display": false, "description" : "Google codelab that integrates a service worker into an existing application to make the application work offline. ", "image" : "./img/project7.jpg", "link" : "https://rsalaz9.github.io/IT202/project7/"}
    ]
    
$(function (){
    $.each(projects, function(i,v){
        console.log(projects);
        var clone =  $("#template").clone();
        clone.find(".card-title").text(v.name);
        clone.find(".card-text").text(v.description);
        clone.find(".card-img-top").attr("src", v.image);
        clone.find(".btn-primary").attr("href", v.link);
        clone.removeClass("hidden");
        //clone.attr("id", v.cell);
        $(".cards").append(clone);
}); 
});
