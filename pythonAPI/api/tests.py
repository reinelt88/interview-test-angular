from django.test import TestCase
from django.urls import reverse


class TestApi(TestCase):
    def __init__(self, methodName: str = ...):
        super().__init__(methodName)
        self.student = {
            'id': 1,
            'FirstName': 'Jhon',
            'LastName': 'Doe',
            'Email': 'jhondoe@rezare-systems.breezy-mail.com',
            'Major': 'Math',
            'Grade': 'A',
            'Score': 100
        }

    def test_api_root(self):
        response = self.client.get(reverse("student_list"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), [])

    # test student creation
    def test_api_student_create(self):
        response = self.client.post(reverse("student_create"), self.student)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), self.student)

    # test student get
    def test_api_student_get(self):
        response = self.client.get(reverse("student_detail", kwargs={'pk': self.student['id']}))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), self.student)

    # test student update
    def test_api_student_update(self):
        response = self.client.put(reverse("student_update", kwargs={'pk': self.student['id']}),
                                   )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), self.student)

    # test student delete
    def test_api_student_delete(self):
        response = self.client.delete(reverse("student_delete", kwargs={'pk': self.student['id']}))
        self.assertEqual(response.status_code, 204)
        self.assertEqual(response.json(), {})
