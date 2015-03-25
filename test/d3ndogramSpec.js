(function(){

    define(['d3ndogram'], function(d3ndogram){
        describe('d3ndogram', function(){
            it('should be defined', function(){
                expect(typeof d3ndogram).not.toBe('undefined')
            })
            describe('module', function(){
                describe('instance', function(){

                    var instance

                    beforeEach(function(){
                        instance = d3ndogram()
                    })
                    describe('creation', function(){
                        it('should return a d3ndogram instance', function(){
                            expect(typeof instance).not.toBe('undefined')

                        })
                    })
                    describe('dispatch method', function(){

                        var check
                        beforeEach(function(){
                            check = 'checker'
                        })

                        describe('when called with an argument', function(){
                            beforeEach(function(){
                                instance.dispatch(check)
                            })
                            it('should update the internal dispatcher with the arg', function(){
                                expect(instance.dispatch()).toBe(check)
                            })
                        })

                    })
                })
            })
        })

    })

})()
