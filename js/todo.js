$(document).ready(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const $detail = $('#todo-detail');
    const $error = $('#todo-error');
    const $status = $('#todo-status');

    if (!id) {
        $detail.hide();
        $error.text('URL에 id 파라미터가 없습니다. 예: todo.html?id=1').removeAttr('hidden');
        return;
    }

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/' + id,
        type: 'GET',
        success: function (response) {
            const isCompleted = response.completed;
            const statusClass = isCompleted ? 'done' : 'pending';
            const statusText = isCompleted ? '완료' : '진행중';
            const completedText = isCompleted ? '완료됨' : '진행 중';

            $('#todo-title').text(response.title);
            $('#todo-id').text(response.id);
            $('#todo-userId').text(response.userId);
            $('#todo-completed').text(completedText);

            $status
                .removeClass('pending done')
                .addClass(statusClass)
                .text(statusText);

            if (isCompleted) {
                $detail.addClass('is-completed');
            }
        },
        error: function () {
            $detail.hide();
            $error.removeAttr('hidden');
        },
    });
});
