import { expect } from 'chai'
import { mount } from 'avoriaz'
import CurrentItem from '../src/components/CurrentItem.vue'

describe('CurrentItem.vue', () => {
    it('sets item prop value', () => {
        const itemProp = 'sample task item string'
        const wrapper = mount(CurrentItem, { propsData: { item: itemProp }})
        const label = wrapper.find('label')[0]
        expect(label.text()).to.equal(itemProp)
    })
})