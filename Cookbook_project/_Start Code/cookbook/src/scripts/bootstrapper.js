var Bootstrapper = (function () {
    function Bootstrapper() {
    }
    Bootstrapper.prototype.loadRecipes = function () {
        var el = document.getElementById('RecipeCategory');
        try {
            var category = this.recipeCategories.items
                .filter(function (item) { alert(item.name);
                                        return item.name === el.value; })
                .reduce(
                function (item) {
                //TODO (CONSTRUCTORS EXERCISE)
                //Change the RecipeCategory code below so that the property values are
                //passed into the constructor rather than set individually.
                var rc = new RecipeCategory(item);
                //console.log(rc);
                return rc;
            });
            this.renderer.renderCategory(category);
        }
        catch (ex) {
            //alert(ex.message);
            alert('problem loadRecipes');
        }
    };

    Bootstrapper.prototype.init = function () {
        var _this = this;
        var categoriesSelect = document.getElementById('RecipeCategory');
        categoriesSelect.onchange = function () { return _this.loadRecipes(); };
        var recipeLoader = new RecipeLoader("/json/recipeTypes.json");
        recipeLoader.load().then(function (recipeData) {
            _this.recipeCategories = recipeData.recipeCategories;
            _this.renderer = new Renderer(recipeData.recipeCategoriesSummary);
        });
    };
    return Bootstrapper;
}());
window.onload = function () {
    var bootstrapper = new Bootstrapper();
    bootstrapper.init();
};
//# sourceMappingURL=bootstrapper.js.map