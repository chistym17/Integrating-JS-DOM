document.getElementById('dep-btn').addEventListener('click', function () {
    const new_amount = get_input_value('deposit');
    const previous_deposited = get_previous_total('prev_dep');
    update_total_deposited_or_withdrawed('prev_dep', new_amount, previous_deposited);
    update_total_balance_after_deposited('balance', new_amount);
});

