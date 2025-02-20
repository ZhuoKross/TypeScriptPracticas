import UIFactory from "./UIFactory";




const MainComponent: React.FC = () => {
    const uiFactory = new UIFactory();
    const form = uiFactory.createForm();
    const formComponent = form.render();

    return(

        <div className="w-full h-screen bg-amber-200 mt-2 flex justify-center items-center flex-col">
            <h2 className="text-4xl pt-4 pb-4">Form element</h2>
            {formComponent}
        </div>
    );

}



export default MainComponent;