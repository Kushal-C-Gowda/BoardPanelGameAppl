({
    fetchResult : function(component) {
        const action = component.get("c.getResult"); 
        action.setCallback(this, function(response){
            const state = response.getState();
            if(state === "SUCCESS"){
                const resp = response.getReturnValue();
                component.set("v.data",resp);
            }
        });
        $A.enableAssertions(action);

    }
})
