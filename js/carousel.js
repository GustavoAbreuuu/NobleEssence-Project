function Carousel(config) {
    this.container = (typeof config.container === 'string') ?
    document.querySelector(config.container) : config.container

    this.itens = (typeof config.itens === 'string') ? 
    this.container.querySelectorAll(config.itens) : config.itens

    this.btnPrev = (typeof config.btnPrev === 'string') ?
    this.container.querySelector(config.btnPrev) : config.btnPrev

    this.btnNext = (typeof config.btnNext === 'string') ? 
    this.container.querySelector(config.btnNext) : config.btnNext

    let _this = this;
    let _currentSlide = 0 

    init ()

    function init() {
        let _show = _this.container.querySelectorAll('.show')

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })
        
        Array.prototype.forEach.call(_this.itens, function(item){
            item.setAttribute('aria-hidden', 'true')
        })
        _this.itens[0].classList.add('show')
        _this.itens[0].removeAttribute('aria-hidden') // ou setAttribute('aria-hidden', 'false')

        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')

        addListeners()
    }

    function addListeners(){
        _this.btnNext.addEventListener('click', showNextSlide)
        _this.btnPrev.addEventListener('click', showPrevSlide)
    }

    function showNextSlide() {
        _currentSlide++;
        showSlide()
    }

    function showPrevSlide() {
        _currentSlide--;
        showSlide()
    }

    function showSlide() {
        let qtd = _this.itens.length;
        let slide = _currentSlide % qtd;
        slide = Math.abs(slide);
        let currentSlide = _this.container.querySelector('.show');

        if(currentSlide){
            currentSlide.classList.remove('show');
            currentSlide.setAttribute('aria-hidden', 'true');
        }
        _this.itens[slide].classList.add('show');
        _this.itens[slide].removeAttribute('aria-hidden'); // ou setAttribute('aria-hidden', 'false')
    }
}