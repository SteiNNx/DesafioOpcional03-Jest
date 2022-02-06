import { mount } from '@vue/test-utils'
import Header from '@/components/Header'

/**
 * @link Mount Opciones https://vue-test-utils.vuejs.org/api/options.html#mounting-options
 */

describe('Header.vue', () => {
    it('Renderizar componente pasando props Titulo y Color', () => {
        const titulo = 'Titulo';
        const color = 'red';

        const HeaderWrapper = mount(Header, {
            propsData: {
                titulo,
                color,
            }
        });

        expect(HeaderWrapper.props().titulo).toBe(titulo);
        expect(HeaderWrapper.props().color).toBe(color);

    });

    it('Renderizar componente sin props', () => {
        const HeaderWrapper = mount(Header, {});

        /**
         * @link https://vue-test-utils.vuejs.org/api/wrapper/find.html#find
         */
        expect(
            HeaderWrapper
                .find('h1')
                .exists()
        ).toBe(true);
    });

})