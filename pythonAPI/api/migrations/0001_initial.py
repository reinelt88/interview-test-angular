# Generated by Django 4.0.3 on 2022-03-30 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FirstName', models.CharField(max_length=60)),
                ('LastName', models.CharField(max_length=60)),
                ('Email', models.CharField(max_length=320)),
                ('Major', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
    ]
