import router from '~/router';

import catchAsync from '~/services/catchAsync';

import NotificationApi from '~/api/NotificationApi';
import CourseCategoryApi from '~/api/CourseCategoryApi';

const getApiClass = (controllerName) => {
  switch (controllerName) {
    case 'NotificationApi': return NotificationApi;
    case 'CourseCategoryApi': return CourseCategoryApi;
    case 'CourseApi': return CourseApi;
    case 'ProblemApi': return ProblemApi;
  }
};

// request.params - { controllerName: 'CourseApi', methodName: 'getPublicCourses' }
router.post('/api/:controllerName.:methodName', catchAsync(async (request, response, next) => {
  const SomeApi = getApiClass(request.params.controllerName);
  await SomeApi[request.params.methodName](request, response, next);
}));

// TODO make all routes like NotificationApi.rate() instead
import CourseApi from '~/api/CourseApi';
router.use('/api/courses', CourseApi);

import ProblemApi from '~/api/ProblemApi';
router.use('/api/problems', ProblemApi);

import ProblemUserIsLearningApi from '~/api/ProblemUserIsLearningApi';
router.use('/api/problemsUserIsLearning', ProblemUserIsLearningApi);

import CourseUserIsLearningApi from '~/api/CourseUserIsLearningApi';
router.use('/api/coursesUserIsLearning', CourseUserIsLearningApi);

import AuthApi from '~/api/AuthApi';
router.use('/api/auth', AuthApi);

import PageApi from '~/api/PageApi';
router.use('/api/pages', PageApi);

import FileApi from '~/api/FileApi';
router.use('/api/files', FileApi);
