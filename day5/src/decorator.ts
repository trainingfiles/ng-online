function Component(params:any){
    return function(TargetClass:any){
        let tc = new TargetClass();
        return class{
            title = tc.title;
            selector = params.selector;
            template = params.template;
        }
    }
};
// decorator
@Component({ 
    selector : "app-root", 
    template : `<div> 
                    <h2>Welcome to Angular</h2> 
                    <h3>{{title}}</h3>
                    <ul>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                        <li>List Item 3</li>
                        <li>List Item 4</li>
                        <li>List Item 5</li>
                    </ul>
               </div>
               ` 
})
class AppComp{
    title = "App Component's Title"
};
