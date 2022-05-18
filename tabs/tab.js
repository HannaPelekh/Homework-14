class Tabs {
    static CLASSES = {
        containerTitle:"title_container",
        title:"item-title",
        activeTitle: 'active_title',
        activeBody: 'active_body',
        containerBody:"body_container",
        body:"item-body",        
    };
    constructor (el) {
        this.el = el;  
        this.el.addEventListener("click", this.onTitleClick); 
        this.items = [...el.children]    
        this.titleC = this.items[0];
        this.bodyC = this.items[1];
        this.titleItems = [...this.titleC.children];        
        this.bodyItems = [...this.bodyC.children];  
        this.setChildrenClass();                      
    };

    setChildrenClass() {
        const firstTitle = this.titleItems[0];
        const firstBody = this.bodyItems[0];
        this.titleC.classList.add(Tabs.CLASSES.containerTitle);
        this.bodyC.classList.add(Tabs.CLASSES.containerBody);  
        this.titleItems.forEach((e) => {
            e.classList.add(Tabs.CLASSES.title)            
        })
        this.bodyItems.forEach((e) => {
            e.classList.add(Tabs.CLASSES.body)
        })    
        firstTitle.classList.add(Tabs.CLASSES.activeTitle);  
        firstBody.classList.add(Tabs.CLASSES.activeBody);                 
    } 

    onTitleClick = (event) => {  
        const target = event.target; 
        if (target.classList.contains(Tabs.CLASSES.title)) {
            const i = this.titleItems.indexOf(target)
            this.bodyItems.forEach((e, index) => {
                if( i === index ){
                    e.classList.add(Tabs.CLASSES.activeBody)
                }
                else{
                    e.classList.remove(Tabs.CLASSES.activeBody)
                    
                }
            })            
            this.titleItems.forEach((e,index) => {                
                if( i === index ){
                    e.classList.add(Tabs.CLASSES.activeTitle)
                }
                else{
                    e.classList.remove(Tabs.CLASSES.activeTitle)
                    
                }
            })             
        }
    }
}

