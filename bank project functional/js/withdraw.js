document.getElementById('with-btn').addEventListener('click', function () {
    const new_amount = get_input_value('withdraw');

    if (!check_withdraw_status(new_amount)) return;

    const previous_withdrawn = get_previous_total('prev_with');
    update_total_deposited_or_withdrawed('prev_with', new_amount, previous_withdrawn);
    update_total_balance_after_withdrawed('balance', new_amount);
});
